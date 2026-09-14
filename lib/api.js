const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export async function submitContact(payload) {
  const res = await fetch(`${API_BASE}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  let data = null;
  try {
    data = await res.json();
  } catch {
    // non-JSON response
  }

  if (!res.ok) {
    const message =
      data?.errors && Object.values(data.errors)[0]
        ? Object.values(data.errors)[0]
        : data?.error || "Something went wrong. Please try again.";
    throw new Error(message);
  }

  return data;
}
