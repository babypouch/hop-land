import Image from 'next/image'
import Link from 'next/link'
import babypouchLogo from '@/images/logos/babypouch.jpg'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'
import nunaCard from '@/images/hero-cards/nuna-trvl-stroller.png'
import collegeCard from '@/images/hero-cards/college-fund.png'
import mobyCard from '@/images/hero-cards/moby-wrap.png'
import diaperCard from '@/images/hero-cards/diaper-fund.png'
import toyCard from '@/images/hero-cards/nursery-toys.png'



export function Hero() {
  return (
    <Container className="pt-20 relative max-w-7xl text-center lg:pt-32">
      <div className="hidden lg:block rotate-6 absolute -top-10 md:left-1">
        <Image src={toyCard} className="" alt="" />
      </div>

      <div className="hidden lg:block -rotate-6 absolute top-72 md:-left-48">
        <Image src={mobyCard} className="" alt="" />
      </div>
      <div className="hidden lg:block rotate-4 absolute top-96 md:-left-25">
        <Image src={diaperCard} className="" alt="" />
      </div>


      <div className="hidden lg:block -rotate-6 absolute md:-right-24">
        <Image src={nunaCard} className="" alt="" />
      </div>
      <div className="hidden lg:block rotate-6 absolute top-96 md:-right-1">
        <Image src={collegeCard} className="" alt="" />
      </div>

      <Link href="#" aria-label="Home">
        <Image
          className="w-20 h-20 animate-bounce mx-auto"
          src={babypouchLogo}
          alt=""
        />
        <h1 className="text-2xl font-semibold mt-4 mb-8">Baby Pouch</h1>
      </Link>
      <h1 className="mx-auto max-w-2xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Create a personalized baby registry in seconds
      </h1>
      <p className="mx-auto mt-6 max-w-lg text-lg tracking-tight text-slate-700">
      Our AI shopping assistant will find what you actually need instantly
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="/" className="bg-pouch-snow-500 hover:bg-pouch-snow-700 px-8 py-3 text-[#fff]">Try now</Button>
      </div>
      <div className="mt-36 lg:mt-44">
      </div>
    </Container>
  )
}
