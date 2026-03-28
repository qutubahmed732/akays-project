

export default function Features() {

  const featues = [
    { emoji: '🔥', heading: "Seamless Connections", text: "Stay in touch with friends, family, and like-minded people with just a tap." },
    { emoji: '📸', heading: "Share Your Story", text: "Upload photos, videos, and updates to let the world know what’s happening in your life." },
    { emoji: '💬', heading: "Real-Time Chat", text: "Whether it's a DM or a group conversation, connect instantly with smooth, lightning-fast messaging." },
    { emoji: '🔒', heading: "Privacy First", text: "Your data, your control. We prioritize your privacy with world-class security." },
    { emoji: '🌎', heading: "Discover & Explore", text: "Find trending content, join communities, and follow pages that match your interests." },
    { emoji: '💼', heading: "Grow Your Business", text: "Use our platform to market your brand, connect with customers, and build meaningful relationships." }
  ]
  return (
    <section className="py-10 bg-[#f2f2f2] space-y-4">
      <div className="text-center space-y-2 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-balance">Features That Keep You Hooked!</h1>
        <p className="text-xl font-semibold">Meet, Chat, Share – Anytime, Anywhere!</p>
      </div>

      <div className="max-w-7xl mx-auto p-5">
        <div className="grid grid-cols-1 min-[601px]:grid-cols-2 min-[801px]:grid-cols-3 grid-rows-2 gap-10">

          {featues.map(item => (
            <div className="p-10 rounded-2xl bg-[#f2f2f2] shadow-[-3px_-3px_10px_rgba(255,255,255,1),8px_10px_5px_rgba(0,0,0,0.06)] flex flex-col items-center gap-4">
              <h4 className="text-xl font-semibold content-center">{item.emoji} {item.heading}</h4>
              <p className="text-center text-pretty">{item.text}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}