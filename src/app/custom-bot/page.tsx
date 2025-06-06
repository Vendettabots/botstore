export default function CustomBotPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-3xl font-bold">Need a Custom Bot?</h1>
      <p className="text-sm text-gray-600">
        Tell us your vision — volume sniper, OI alert, swing scalper, anything. We build precision tools for traders.
      </p>
      <form
        action="https://formsubmit.co/vendettabots@proton.me"
        method="POST"
        className="space-y-4"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="Custom Bot Request" />

        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="w-full border border-gray-300 rounded p-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="w-full border border-gray-300 rounded p-2"
        />
        <textarea
          name="details"
          placeholder="Describe what you want..."
          required
          className="w-full border border-gray-300 rounded p-2 h-32"
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900"
        >
          Send Request
        </button>
      </form>
    </main>
  );
}
