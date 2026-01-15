import Link from "next/link"
import Image from "next/image"
import { Linkedin, Facebook, Twitter } from "lucide-react"
import { MostViewed } from "@/components/most-viewed"

export function PostContent() {
  return (
    <div className="px-6 py-12 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr_250px] gap-8">
          {/* Share sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-6">
              <p className="text-foreground text-sm mb-4">Share on</p>
              <div className="flex flex-col gap-3">
                <Link href="#" className="text-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-foreground hover:text-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-foreground hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Main content */}
          <article className="text-foreground">
            {/* Lead paragraph */}
            <p className="text-lg font-semibold leading-relaxed mb-6">
              Curabitur sit amet sapien at velit fringilla tincidunt porttitor eget lacus. Sed mauris libero, malesuada
              et venenatis vitae, porta ac enim.
            </p>

            {/* Body text */}
            <p className="text-muted-foreground leading-relaxed mb-6">
              Curabitur sit amet sapien at velit fringilla tincidunt porttitor eget lacus. Sed mauris libero, malesuada
              et venenatis vitae, porta ac enim. Aliquam erat volutpat. Cras tristique eleifend dolor, et ultricies nisi
              feugiat sed. Pellentesque blandit orci eu velit vehicula commodo. Phasellus{" "}
              <span className="underline">imperdiet</span> finibus ex eget gravida. Maecenas vitae molestie dolor. Nulla
              hendrerit ipsum leo, in tempor urna interdum ut. Sed molestie sodales quam. Mauris sollicitudin metus at
              eros imperdiet, vitae pulvinar nunc condimentum. Pellentesque rhoncus, lacus sit amet mollis placerat,
              nulla lectus maximus justo, quis gravida elit augue id lacus.
            </p>

            {/* Image row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image src="/hands-typing-on-laptop-keyboard.jpg" alt="Article image 1" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image src="/abstract-digital-art-colorful-shapes.jpg" alt="Article image 2" fill className="object-cover" />
              </div>
            </div>

            {/* Section heading */}
            <h2 className="text-xl font-semibold mb-4">Pellentesque venenatis arcu lectus, quis</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Maecenas iaculis et dolor ac laoreet. Curabitur placerat porta dolor. Quisque consectetur vitae odio ac
              posuere. Nullam tristique tellus purus, quis aliquet purus sodales sed. Sed hendrerit gravida augue luctus
              suscipit. Maecenas id faucibus magna. Sed placerat orci ac orci blandit, at porta ante ornare. Praesent
              tristique sollicitudin fringilla. Morbi at laoreet enim, sed viverra ligula. Sed laoreet, elit vel
              faucibus semper, urna ante euismod sem, accumsan volutpat augue ante ut elit.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Phasellus rutrum, nulla vitae euismod blandit, elit nisi placerat neque, vitae facilisis massa sapien a
              mi. Fusce sit amet blandit lectus.
            </p>

            {/* Full width image */}
            <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
              <Image src="/yellow-abstract-hands-reaching-digital-art.jpg" alt="Article feature image" fill className="object-cover" />
            </div>

            {/* Blockquote */}
            <blockquote className="border-l-4 border-primary pl-6 py-2 mb-8">
              <p className="text-foreground text-lg font-medium leading-relaxed">
                Commodo eget mi. In orci nunc, laoreet eleifend sem vel, suscipition lorem ipsum
              </p>
            </blockquote>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel sem in nunc porttitor dapibus a
              sollicitudin nunc. Sed lacinia nisl a magna congue, maximus tristique tellus finibus.
            </p>

            {/* Another section */}
            <h2 className="text-xl font-semibold mb-4">Nullam tristique tellus purus</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Maecenas iaculis et dolor ac laoreet. Curabitur placerat porta dolor. Quisque consectetur vitae odio ac
              posuere. Nullam tristique tellus purus, quis aliquet purus sodales sed. Sed hendrerit gravida augue luctus
              suscipit. Maecenas id faucibus magna. Sed placerat orci ac orci blandit, at porta ante ornare. Praesent
              tristique sollicitudin fringilla. Morbi at laoreet enim, sed viverra ligula. Sed laoreet, elit vel
              faucibus semper, urna ante euismod sem, accumsan volutpat augue ante ut elit.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Phasellus rutrum, nulla vitae euismod blandit, elit nisi placerat neque, vitae facilisis massa sapien a
              mi. Fusce sit amet blandit lectus.
            </p>
          </article>

          {/* Most viewed sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-6">
              <MostViewed />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
