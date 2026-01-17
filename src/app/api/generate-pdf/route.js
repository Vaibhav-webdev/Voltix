import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";

export const runtime = "nodejs";

export async function POST() {
    const body = await req.json();

  const { id } = body;

  const browser = await puppeteer.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath(),
    headless: true,
  });

  const page = await browser.newPage();

  // ⚠️ SAME SD PAGE URL
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/review?id=${id}`;

  await page.goto(url, {
    waitUntil: "networkidle0",
  });

  const pdfBuffer = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: {
      top: "10mm",
      bottom: "10mm",
    },
  });

  await browser.close();

  return new Response(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=resume.pdf",
    },
  });
}
