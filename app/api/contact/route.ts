import { google } from "googleapis";

export const runtime = "nodejs";

const SHEET_NAME = "Sheet1";
const SHEET_RANGE = `'${SHEET_NAME}'!A:G`;

type ContactSubmission = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  smsConsent: "yes" | "no" | "";
};

type ValidationErrors = Partial<Record<keyof ContactSubmission, string>>;

function stringValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function validateSubmission(payload: unknown): {
  data?: ContactSubmission;
  errors: ValidationErrors;
} {
  const body = payload && typeof payload === "object" ? payload : {};
  const record = body as Record<string, unknown>;
  const data: ContactSubmission = {
    name: stringValue(record.name),
    phone: stringValue(record.phone),
    email: stringValue(record.email).toLowerCase(),
    subject: stringValue(record.subject),
    message: stringValue(record.message),
    smsConsent: stringValue(record.smsConsent) as ContactSubmission["smsConsent"],
  };
  const errors: ValidationErrors = {};

  if (!data.name) errors.name = "Please enter your name.";
  else if (data.name.length > 120) errors.name = "Name must be 120 characters or fewer.";

  if (!data.phone) errors.phone = "Please enter your phone number.";
  else if (data.phone.length > 50) errors.phone = "Phone number must be 50 characters or fewer.";

  if (!data.email) errors.email = "Please enter your email address.";
  else if (data.email.length > 254 || !/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.subject) errors.subject = "Please enter a subject.";
  else if (data.subject.length > 200) {
    errors.subject = "Subject must be 200 characters or fewer.";
  }

  if (!data.message) errors.message = "Please enter a message.";
  else if (data.message.length > 5000) {
    errors.message = "Message must be 5,000 characters or fewer.";
  }

  if (data.smsConsent && data.smsConsent !== "yes" && data.smsConsent !== "no") {
    errors.smsConsent = "Please choose a valid SMS consent option.";
  }

  return Object.keys(errors).length ? { errors } : { data, errors };
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { message: "Please submit the form again." },
      { status: 400 },
    );
  }

  const { data, errors } = validateSubmission(payload);
  if (!data) {
    return Response.json(
      { message: "Please correct the highlighted fields.", errors },
      { status: 400 },
    );
  }

  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!spreadsheetId || !clientEmail || !privateKey) {
    return Response.json(
      { message: "The contact form is temporarily unavailable. Please try again later." },
      { status: 503 },
    );
  }

  try {
    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: SHEET_RANGE,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toISOString(),
            data.name,
            data.email,
            data.subject,
            data.message,
            data.phone,
            data.smsConsent,
          ],
        ],
      },
    });
  } catch {
    return Response.json(
      { message: "We could not send your inquiry. Please try again later." },
      { status: 502 },
    );
  }

  return Response.json({ message: "Your inquiry has been sent." }, { status: 201 });
}
