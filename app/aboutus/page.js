export default function AboutPage() {
    return (
      <div className="max-w-4xl mx-auto py-12 px-6 text-[#3D405B]">
        <h1 className="text-4xl font-bold text-[#26547C] mb-4">About Fandom Market</h1>
  
        <p className="mb-6 text-lg">
          Fandom Market is your online home for buying, selling, and collecting fandom merch — from cult classics to modern obsessions. 
          Whether you’re clearing out your *Twilight* shrine, hunting down that missing *Mission: Impossible* collector pin, 
          or just really into stickers shaped like tornadoes (we see you, *Twisters* fans), you’ll find your people here.
        </p>
  
        <p className="mb-6">
          We’re a community-run marketplace built on passion, nostalgia, and a little bit of justified chaos. 
          Every listing is made by a fan, for a fan. No bootlegs. No BS. Just vibes, collectibles, and the occasional side-eye from our resident chatbot, RyanBot.
        </p>
  
        <h2 className="text-2xl font-semibold text-[#26547C] mt-8 mb-2">Our Mission</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Support creators, collectors, and casual fans alike</li>
          <li>Make fandom collecting feel fun, safe, and community-driven</li>
          <li>Bridge the gap between nostalgia and commerce with style</li>
          <li>Never allow merch with Comic Sans on it</li>
        </ul>
  
        <h2 className="text-2xl font-semibold text-[#26547C] mt-10 mb-2">Meet RyanBot</h2>
        <p>
          He’s our AI-powered assistant. He's helpful. He’s sarcastic. He’s probably judging your search history. 
          Ask him anything about how the site works — just don’t expect him to be gentle.
        </p>
  
        <div className="mt-10 text-sm text-[#8D99AE] italic">
          This platform was built by fans, for fans. So if you have a cool idea, a bug to report, or you just wanna scream about SVU season finales,
          <a href="/contactus" className="underline text-[#FF6B6B] hover:text-[#EF476F] ml-1">we’re listening.</a>
        </div>
      </div>
    )
  }
  