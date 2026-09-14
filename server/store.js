import { readFile, writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, "data");
const DATA_FILE = path.join(DATA_DIR, "submissions.json");

async function ensureStore() {
  if (!existsSync(DATA_DIR)) await mkdir(DATA_DIR, { recursive: true });
  if (!existsSync(DATA_FILE)) await writeFile(DATA_FILE, "[]", "utf-8");
}

export async function saveSubmission(entry) {
  await ensureStore();
  const raw = await readFile(DATA_FILE, "utf-8");
  const list = JSON.parse(raw || "[]");
  list.unshift(entry);
  await writeFile(DATA_FILE, JSON.stringify(list, null, 2), "utf-8");
  return entry;
}

export async function listSubmissions() {
  await ensureStore();
  const raw = await readFile(DATA_FILE, "utf-8");
  return JSON.parse(raw || "[]");
}
