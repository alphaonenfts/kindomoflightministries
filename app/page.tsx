import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Heart,
  Users,
  BookOpen,
  Cross,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Import our enhanced components
import { ImprovedHeader } from "./components/improved-header"
import { HeroSection } from "./components/hero-section"
import { AnimatedSection } from "./components/animated-section"
import { SectionHeader } from "./components/section-header"
import { EnhancedCard } from "./components/enhanced-card"
import { SectionDivider } from "./components/section-divider"
import { EnhancedContactForm } from "./components/enhanced-form"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Enhanced Header */}
      <ImprovedHeader />

      <main className="flex-1 pt-16 md:pt-20">
        {/* Enhanced Hero Section */}
        <HeroSection
          title="Kingdom of Light Ministries"
          subtitle="A place where God's light shines bright, community flourishes, and lives are transformed by His love"
          primaryButtonText="Plan Your Visit"
          secondaryButtonText="Watch Online"
        />

        {/* Service Times */}
        <AnimatedSection className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Join Us for Worship"
              subtitle="Experience meaningful worship and fellowship in our welcoming community"
            />
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <EnhancedCard title="Sunday Worship" icon={<Clock className="h-8 w-8" />} variant="service">
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-600 mb-2">9:00 AM & 11:00 AM</p>
                  <p className="text-gray-600 text-lg">Traditional & Contemporary Services</p>
                  <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                    <p className="text-sm text-amber-800">
                      Join us for inspiring worship, biblical teaching, and community fellowship
                    </p>
                  </div>
                </div>
              </EnhancedCard>

              <EnhancedCard title="Bible Study" icon={<BookOpen className="h-8 w-8" />} variant="service">
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-600 mb-2">Wednesday 7:00 PM</p>
                  <p className="text-gray-600 text-lg">Adult & Youth Classes Available</p>
                  <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                    <p className="text-sm text-amber-800">Deep dive into God's Word with interactive discussion</p>
                  </div>
                </div>
              </EnhancedCard>

              <EnhancedCard title="Small Groups" icon={<Users className="h-8 w-8" />} variant="service">
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-600 mb-2">Various Times</p>
                  <p className="text-gray-600 text-lg">Connect & Grow Together</p>
                  <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                    <p className="text-sm text-amber-800">Build lasting relationships and grow in faith together</p>
                  </div>
                </div>
              </EnhancedCard>
            </div>
          </div>
        </AnimatedSection>

        <SectionDivider />

        {/* About Section */}
        <AnimatedSection id="about" className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection animation="slide-left">
                <SectionHeader
                  title="About Our Ministry"
                  subtitle="Kingdom of Light Ministries has been a beacon of hope and faith in our community, committed to following Jesus Christ and serving others with love, compassion, and the light of God's grace."
                  centered={false}
                />
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-amber-50 transition-colors">
                    <Heart className="h-8 w-8 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                      <p className="text-gray-600 text-lg">
                        To spread God's light and make disciples who illuminate the world with His love
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-amber-50 transition-colors">
                    <Cross className="h-8 w-8 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                      <p className="text-gray-600 text-lg">
                        A kingdom community transformed by God's light, reaching our city and beyond
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-amber-50 transition-colors">
                    <Users className="h-8 w-8 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                      <p className="text-gray-600 text-lg">Faith, Light, Community, Service, and God's Kingdom</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-right" delay={200}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl transform rotate-3"></div>
                  <Image
                    src="/about.png"
                    alt="Ministry community gathering"
                    width={600}
                    height={500}
                    className="relative rounded-2xl shadow-2xl object-cover"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                    <p className="text-2xl font-bold text-amber-600">50+</p>
                    <p className="text-sm text-gray-600">Years of Service</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>

        <SectionDivider inverted />

        {/* Pastor Section */}
        <AnimatedSection className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Meet Our Pastor"
              subtitle="Our pastoral team is dedicated to shepherding our congregation with wisdom, love, and biblical truth."
            />
            <div className="max-w-5xl mx-auto">
              <EnhancedCard title="" icon={<></>} className="overflow-hidden border-amber-200 shadow-xl">
                <div className="grid md:grid-cols-2 gap-8 p-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl transform rotate-2"></div>
                    <Image
                      src="/pastor2.png"
                      alt="Pastor Makinwa"
                      width={400}
                      height={400}
                      className="relative rounded-xl shadow-lg object-cover w-full"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-3">Pastor Makinwa</h3>
                    <p className="text-amber-600 font-semibold text-xl mb-6">Senior Pastor</p>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      Pastor Makinwa has been serving Kingdom of Light Ministries with a heart for spreading God's light
                      and love. He holds a passion for expository preaching and pastoral care, dedicated to helping
                      others walk in the light of Christ.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        <p className="text-gray-700">
                          <strong>Calling:</strong> Spreading the Kingdom of Light
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        <p className="text-gray-700">
                          <strong>Heart:</strong> Pastoral Care and Biblical Teaching
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        <p className="text-gray-700">
                          <strong>Specialties:</strong> Kingdom Building, Community Outreach
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </EnhancedCard>
            </div>
          </div>
        </AnimatedSection>

        <SectionDivider />

        {/* Services Section */}
        <AnimatedSection id="services" className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Our Services"
              subtitle="Join us for meaningful worship experiences designed to help you grow in God's light and love."
              accent
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <EnhancedCard title="Sunday Morning Worship" icon={<Clock className="h-6 w-6" />} variant="service">
                <p className="text-gray-600 mb-6 text-lg">
                  Our main worship service featuring contemporary music, biblical preaching, and communion.
                </p>
                <div className="space-y-3 text-base">
                  <div className="flex justify-between">
                    <strong>Time:</strong>
                    <span>9:00 AM & 11:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <strong>Duration:</strong>
                    <span>75 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <strong>Style:</strong>
                    <span>Contemporary & Traditional</span>
                  </div>
                </div>
              </EnhancedCard>

              <EnhancedCard title="Wednesday Bible Study" icon={<BookOpen className="h-6 w-6" />} variant="service">
                <p className="text-gray-600 mb-6 text-lg">
                  Deep dive into God's Word with interactive discussion and practical application.
                </p>
                <div className="space-y-3 text-base">
                  <div className="flex justify-between">
                    <strong>Time:</strong>
                    <span>7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <strong>Duration:</strong>
                    <span>60 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <strong>Format:</strong>
                    <span>Interactive Study</span>
                  </div>
                </div>
              </EnhancedCard>

              <EnhancedCard title="Prayer & Worship" icon={<Heart className="h-6 w-6" />} variant="service">
                <p className="text-gray-600 mb-6 text-lg">
                  Intimate time of prayer, worship, and seeking God's presence together.
                </p>
                <div className="space-y-3 text-base">
                  <div className="flex justify-between">
                    <strong>Time:</strong>
                    <span>Friday 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <strong>Duration:</strong>
                    <span>90 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <strong>Style:</strong>
                    <span>Contemplative</span>
                  </div>
                </div>
              </EnhancedCard>
            </div>
          </div>
        </AnimatedSection>

        <SectionDivider inverted />

        {/* Ministries Section */}
        <AnimatedSection id="ministries" className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Our Ministries"
              subtitle="We offer various ministries to serve people of all ages and stages of life in God's kingdom."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <EnhancedCard
                title="Children's Ministry"
                icon={<Users className="h-8 w-8" />}
                variant="ministry"
                className="text-center"
              >
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-amber-600" />
                </div>
                <p className="text-gray-600 mb-6 text-lg">
                  Fun, safe, and engaging programs for kids from nursery through 5th grade.
                </p>
                <Badge variant="secondary" className="bg-amber-100 text-amber-800 text-base px-4 py-2">
                  Ages 0-11
                </Badge>
              </EnhancedCard>

              <EnhancedCard
                title="Youth Ministry"
                icon={<Heart className="h-8 w-8" />}
                variant="ministry"
                className="text-center"
              >
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-10 w-10 text-red-600" />
                </div>
                <p className="text-gray-600 mb-6 text-lg">
                  Dynamic programs helping teens grow in faith and build lasting friendships.
                </p>
                <Badge variant="secondary" className="bg-red-100 text-red-800 text-base px-4 py-2">
                  Ages 12-18
                </Badge>
              </EnhancedCard>

              <EnhancedCard
                title="Women's Ministry"
                icon={<BookOpen className="h-8 w-8" />}
                variant="ministry"
                className="text-center"
              >
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-10 w-10 text-purple-600" />
                </div>
                <p className="text-gray-600 mb-6 text-lg">
                  Bible studies, fellowship events, and service opportunities for women.
                </p>
                <Badge variant="secondary" className="text-base px-4 py-2">
                  All Ages
                </Badge>
              </EnhancedCard>

              <EnhancedCard
                title="Men's Ministry"
                icon={<Cross className="h-8 w-8" />}
                variant="ministry"
                className="text-center"
              >
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Cross className="h-10 w-10 text-gray-600" />
                </div>
                <p className="text-gray-600 mb-6 text-lg">
                  Brotherhood, accountability, and spiritual growth for men of all ages.
                </p>
                <Badge variant="secondary" className="text-base px-4 py-2">
                  All Ages
                </Badge>
              </EnhancedCard>
            </div>
          </div>
        </AnimatedSection>

        <SectionDivider />

        {/* Events Section */}
        <AnimatedSection id="events" className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Upcoming Events"
              subtitle="Stay connected with our ministry community through these special events and activities."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <EnhancedCard title="" icon={<></>} className="border-amber-200">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-amber-100 text-amber-800 text-base px-3 py-1">This Sunday</Badge>
                  <Calendar className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Kingdom Light Celebration</h3>
                <p className="text-gray-600 mb-4">Special worship service celebrating God's light</p>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    9:00 AM & 11:00 AM
                  </p>
                  <p className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Main Sanctuary
                  </p>
                </div>
              </EnhancedCard>

              <EnhancedCard title="" icon={<></>} className="border-amber-200">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-red-100 text-red-800 text-base px-3 py-1">Next Week</Badge>
                  <Calendar className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community Outreach Day</h3>
                <p className="text-gray-600 mb-4">Serving our local community with love</p>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Saturday 9:00 AM
                  </p>
                  <p className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Various Locations
                  </p>
                </div>
              </EnhancedCard>

              <EnhancedCard title="" icon={<></>} className="border-amber-200">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-purple-100 text-purple-800 text-base px-3 py-1">Monthly</Badge>
                  <Calendar className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Family Fellowship Night</h3>
                <p className="text-gray-600 mb-4">Fun evening for the whole family</p>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    First Friday 6:00 PM
                  </p>
                  <p className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Fellowship Hall
                  </p>
                </div>
              </EnhancedCard>
            </div>
          </div>
        </AnimatedSection>

        <SectionDivider inverted />

        {/* Contact Section */}
        <AnimatedSection id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Get In Touch"
              subtitle="We'd love to hear from you. Reach out with any questions or to learn more about our ministry family."
            />
            <div className="grid lg:grid-cols-2 gap-16">
              <AnimatedSection animation="slide-left">
                <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all">
                    <MapPin className="h-8 w-8 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-xl mb-2">Address</h4>
                      <p className="text-gray-600 text-lg">
                        123 Kingdom Street
                        <br />
                        Light City, LC 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all">
                    <Phone className="h-8 w-8 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-xl mb-2">Phone</h4>
                      <p className="text-gray-600 text-lg">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all">
                    <Mail className="h-8 w-8 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-xl mb-2">Email</h4>
                      <p className="text-gray-600 text-lg">info@kingdomoflightministries.org</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all">
                    <Clock className="h-8 w-8 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-xl mb-2">Office Hours</h4>
                      <p className="text-gray-600 text-lg">
                        Monday - Friday: 9:00 AM - 5:00 PM
                        <br />
                        Saturday: 9:00 AM - 12:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <h4 className="font-semibold text-xl mb-6">Follow Us</h4>
                  <div className="flex space-x-4">
                    {[Facebook, Instagram, Youtube, Twitter].map((Icon, index) => (
                      <button
                        key={index}
                        className="w-12 h-12 bg-amber-100 hover:bg-amber-200 rounded-full flex items-center justify-center transition-all hover:scale-110"
                      >
                        <Icon className="h-6 w-6 text-amber-600" />
                      </button>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-right" delay={200}>
                <EnhancedContactForm />
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src="/klm-logo.png"
                  alt="Kingdom of Light Ministries Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
                <span className="text-2xl font-bold">Kingdom of Light Ministries</span>
              </div>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                A place where God's light shines bright, community flourishes, and lives are transformed by His love.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Instagram, Youtube, Twitter].map((Icon, index) => (
                  <Icon
                    key={index}
                    className="h-6 w-6 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors"
                  />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="#about" className="hover:text-amber-400 transition-colors text-lg">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-amber-400 transition-colors text-lg">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="#ministries" className="hover:text-amber-400 transition-colors text-lg">
                    Ministries
                  </Link>
                </li>
                <li>
                  <Link href="#events" className="hover:text-amber-400 transition-colors text-lg">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-amber-400 transition-colors text-lg">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Ministries</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-amber-400 transition-colors text-lg">
                    Children's Ministry
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-400 transition-colors text-lg">
                    Youth Ministry
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-400 transition-colors text-lg">
                    Women's Ministry
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-400 transition-colors text-lg">
                    Men's Ministry
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-400 transition-colors text-lg">
                    Small Groups
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Service Times</h3>
              <div className="text-gray-400 space-y-4">
                <div>
                  <strong className="text-white text-lg">Sunday Worship:</strong>
                  <br />
                  <span className="text-lg">9:00 AM & 11:00 AM</span>
                </div>
                <div>
                  <strong className="text-white text-lg">Bible Study:</strong>
                  <br />
                  <span className="text-lg">Wednesday 7:00 PM</span>
                </div>
                <div>
                  <strong className="text-white text-lg">Prayer Meeting:</strong>
                  <br />
                  <span className="text-lg">Friday 7:00 PM</span>
                </div>
              </div>
            </div>
          </div>
          <Separator className="my-12 bg-gray-700" />
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
            <p className="text-lg">
              &copy; {new Date().getFullYear()} Kingdom of Light Ministries. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <Link href="#" className="hover:text-amber-400 transition-colors text-lg">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-amber-400 transition-colors text-lg">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-amber-400 transition-colors text-lg">
                Giving
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
