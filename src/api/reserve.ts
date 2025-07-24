// Simple API handler for /api/reserve
export async function POST(req: Request) {
  try {
    const data = await req.json();
    // Log reservation data (in real app, store in DB or file)
    console.log("Reservation received:", data);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: "Invalid data" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
} 