import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, TrendingUp, Map, Users, DollarSign, FileText, Network, Building2 } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#003366] flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold text-[#003366]">Cloud Communities</span>
              <span className="text-xs font-semibold text-[#003366]">Coalition</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="#why" className="text-sm text-gray-700 hover:text-gray-900">
              Why Mobility Matters?
            </Link>
            <Link href="#policy" className="text-sm text-gray-700 hover:text-gray-900">
              Our Vision
            </Link>
            <Button className="bg-[#003366] hover:bg-[#004080] text-white">Join the Coalition</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
          Unlock
          <br />
          <span className="text-[#0080FF]">Global Talent</span>
          <br />
          through Mobility Policy
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8 text-pretty">
          Join a coalition rallying support for progressive mobility policies that help jurisdictions attract remote talent and unlock economic opportunities for everyone.
        </p>
        <Button className="bg-[#003366] hover:bg-[#004080] text-white">
          Join the Coalition
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </section>

      {/* Why Mobility Matters Section */}
      <section id="why" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Why Mobility Matters?</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12 text-pretty">
            Progressive mobility policies are key to unlocking global talent, helping jurisdictions attract remote workers, and creating economic opportunities that benefit everyone while supporting people who pose no risk.
          </p>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-white border border-gray-200">
              <DollarSign className="h-8 w-8 text-[#0080FF] mb-4" />
              <div className="text-3xl font-bold text-[#0080FF] mb-2">$2.5T</div>
              <div className="font-semibold mb-2">Total income represented</div>
              <p className="text-sm text-gray-600">
                Combined economic value of coalition supporters and remote workers
              </p>
            </Card>

            <Card className="p-6 bg-white border border-gray-200">
              <Users className="h-8 w-8 text-[#0080FF] mb-4" />
              <div className="text-3xl font-bold text-[#0080FF] mb-2">150K+</div>
              <div className="font-semibold mb-2">Remote workers pledged</div>
              <p className="text-sm text-gray-600">Global talent ready to contribute to forward-thinking jurisdictions</p>
            </Card>

            <Card className="p-6 bg-white border border-gray-200">
              <Building2 className="h-8 w-8 text-[#0080FF] mb-4" />
              <div className="text-3xl font-bold text-[#0080FF] mb-2">50+</div>
              <div className="font-semibold mb-2">Supporting organizations</div>
              <p className="text-sm text-gray-600">Foundations, ecosystems, and organizations backing mobility reform</p>
            </Card>

            <Card className="p-6 bg-white border border-gray-200">
              <Map className="h-8 w-8 text-[#0080FF] mb-4" />
              <div className="text-3xl font-bold text-[#0080FF] mb-2">25+</div>
              <div className="font-semibold mb-2">Progressive jurisdictions</div>
              <p className="text-sm text-gray-600">
                Forward-thinking governments embracing talent mobility and economic opportunity
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Supporters Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Supported By</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 text-pretty">
            Leading organizations and foundations backing progressive mobility policies for a more connected world.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-[#0080FF]">Ξ</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Ethereum Foundation</h3>
              <p className="text-gray-600 text-sm">Supporting decentralized communities and global collaboration</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-lg bg-purple-50 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-purple-600">◎</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Solana Foundation</h3>
              <p className="text-gray-600 text-sm">Enabling fast, secure, and scalable blockchain solutions</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-lg bg-green-50 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-green-600">🛡️</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">SafetyWing</h3>
              <p className="text-gray-600 text-sm">Building a global social safety net for the 21st century</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to Support Mobility Policy Reform?</h2>
              <p className="text-gray-600 mb-6 text-pretty">
                Join our coalition to advocate for progressive mobility policies that unlock global talent and help jurisdictions thrive. Together, we can create opportunities for remote workers while supporting communities worldwide.
              </p>
              <Button className="bg-[#0080FF] hover:bg-[#0066CC] text-white">
                Join the Coalition
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#0080FF] mt-1">•</span>
                  <span className="text-gray-700">Enable global talent mobility for economic growth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0080FF] mt-1">•</span>
                  <span className="text-gray-700">Support jurisdictions in attracting remote workers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0080FF] mt-1">•</span>
                  <span className="text-gray-700">
                    Help people who pose no risk access new opportunities
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0080FF] mt-1">•</span>
                  <span className="text-gray-700">Foster innovation through diverse, distributed communities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section id="policy" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600 mb-6 text-pretty">
              We envision a world where talent can move freely to where it's most valued, creating prosperity for both individuals and communities through progressive mobility policies.
            </p>
            <Button
              variant="outline"
              className="border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white bg-transparent"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-6 max-w-4xl">
            <Card className="p-6 bg-white border border-gray-200">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Users className="h-6 w-6 text-[#0080FF]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Coalition Building</h3>
                  <p className="text-gray-600 text-pretty">
                    Gathering support from organizations, foundations, and ecosystems that believe in talent mobility and economic opportunity for all.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-gray-200">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Network className="h-6 w-6 text-[#0080FF]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Policy Advocacy</h3>
                  <p className="text-gray-600 text-pretty">
                    Working with governments and policymakers to develop progressive mobility frameworks that benefit both talent and jurisdictions.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-gray-200">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-[#0080FF]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Community Support</h3>
                  <p className="text-gray-600 text-pretty">
                    Providing resources and support to help communities understand and implement policies that attract remote talent responsibly.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12 max-w-3xl">
            <h3 className="font-semibold text-lg mb-4">Why Mobility Policy Matters</h3>
            <p className="text-gray-600 mb-4 text-pretty">
              Current mobility restrictions prevent talented individuals from contributing to jurisdictions where they could have the greatest impact. Progressive mobility policies can unlock billions in economic value while supporting people who pose no risk.
            </p>
            <p className="text-gray-600 text-pretty">
              By creating clear pathways for talent mobility, we can help communities attract the remote workers and innovators they need to thrive in the modern economy.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#003366] py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ready to unlock global talent?</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8 text-pretty">
            Join a coalition of leaders, innovators, and visionaries advocating for progressive mobility policies that benefit everyone.
          </p>
          <Button className="bg-white text-[#003366] hover:bg-gray-100">
            Join the Coalition
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-4">Build the future of global talent mobility.</h3>
            <p className="text-gray-400 mb-6 max-w-xl">
              Join our coalition to support progressive policies that unlock opportunities for everyone.
            </p>
            <Button className="bg-[#0080FF] hover:bg-[#0066CC] text-white">Join the Coalition</Button>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-6">
            <Link href="#" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
          </div>

          <div className="text-xs text-gray-500 border-t border-gray-800 pt-6">
            <p>The Cloud Communities Coalition advocates for progressive mobility policies worldwide.</p>
            <p className="mt-1">© All Rights Reserved 2025</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
