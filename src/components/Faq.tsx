import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'
import Container from './Container';

const Faq = () => {
  return (
    <div className='py-10 bg-black/10'>
      <Container className='text-black'>
        <Accordion type='single' collapsible className='flex flex-col px-4 md:px-6 lg:px-0
        gap-6 overflow-hidden'>

        <AccordionItem value='item-1' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>How do you ensure to find the best match?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
              3-5 marriages are helding on a month by us. They can find the best match through us. We are checking all the
               informations to verification. So we are giving the quality and best service to our client in this regard.
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-2' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>What is a marriage mediya service?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
              A service that helps individuals and families find suitable marriage partners through verified profiles.
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-3' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>How does a matrimony service work?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
              It collects profiles, verifies information, matches preferences, and connects compatible partners.
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-4' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>What is Valentain marriage mediya?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
              Valentain Marriage Mediya is a trusted Bangladeshi marriage media with 16+ years of experience and verified profiles from Bangladesh & abroad.
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-5' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>Is Valentain Marage Mediya a legal and registered service?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
              Yes, Valentain Marriage mediya is a well-established, reputable, and legally recognized matchmaking platform.
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-6' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>Who can use Valentain Marriage Mediya?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
              Unmarried, divorced, widowed individuals, and guardians looking for suitable partners.
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-7' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>
                Do you verify the profiles?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
              Yes, Valentain Marriage Mediya BD manually verifies key details before matching.
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-8' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>
                How do i register with Valentain Marriage Mediya?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
              Visit www.valentainmarriagemediya.com or WhatsApp at 01314824145 or 01756765291.
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-9' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>
                Is my information kept private?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
            Absolutely. Valentain Marriage Mediya ensures complete confidentiality.
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-10' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>
               Do you offer groom profiles?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
              Yes, thousands of verified groom profiles from Bangladesh & abroad.
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-11' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>
                Do you offer bride profiles?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
              Yes, profiles of educated, family-oriented, and professional brides.
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-12' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>
                Do you have profiles from abroad?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
              Yes, including USA, UK, Canada, Australia,
               Japan, Germany, Malaysia, UAE, and more.
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-13' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>
                What types of professionals are available?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
              Doctors, engineers, teachers, executives, BCS cadres, bankers, business families, etc.
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-14' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>
                Can divorced individuals register?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
              Yes, Valentain Marriage Mediya welcomes divorced or widowed individuals.
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-15' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>
                Do you supports guardians?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
              Yes, parents and guardians can register on behalf of their children.
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-16' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>
               How long does it take to get a match?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
              Matching time depends on preference, but many users get matches within days or weeks.
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-17' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>
                What documents are required?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
              Basic info, photos, education/work proof (optional but recommended).
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-18' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>
                Do you offer Islamic compatible matches?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
              Yes, Valentain Marriage Mediya respects religious and cultural values.
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-19' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>
                Is there are any age limit?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
              No strict limit. Profiles range from early 20s to late 40s+.
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-20' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>
                Do you help with biodata creation?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
              Yes, Valentain Marriage Mediya helps create professional biodatas.
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-21' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>
                Do you offer guardian meetings?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
              Yes, arranged upon mutual interest.
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-22' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>
                How many matches can i receive?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
              Depends on membership, but generally several per month.
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-23' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>
                Is there a membership fee?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
             Yes, affordable fees apply for premium and verified services.
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-24' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>
                Do you provide pre-marriage counseling?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
              Basic guidance is provided if clients request.
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-25' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>
                Are profiles screened for authenticity?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
              Yes, Marriage Match BD works hard to prevent fake or misleading profiles.
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-26' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>
                How do i know a match is genuine?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
              Verified profiles include education, job, family background, and identity-checks.
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-27' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>
                Can i update my profile later?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
              Yes, updates are allowed anytime.
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-28' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>
               How many photos should i submit?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
              At least 2-5 clear, recent photos.
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-29' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>
                What if live abroad?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
              Marriage Match BD supports both local and international clients.
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-30' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>
                Do you provide VIP matchmaking?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
              Yes, for high-profile or exclusive clients.
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-31' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>
                How do you match profiles?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
              Based on shared values, lifestyle, education, and personal preferences.
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-32' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>
                Do you arrange meetings between families?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
              Yes, if both sides agree.
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-33' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>
                Why choose Valentain Marriage Mediya?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
             Because of verified profiles, privacy, professionalism, and 16+ years of successful matchmaking.
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-34' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>
                How many successful matches do you have?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
              Thousands of successful marriages through Valentain Marriage Mmediya.
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-35' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>
                Is Valentain Marriage Mediya for elite families?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
            Yes, premium service is available for elite & educated families.
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-36' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>
                Can i meet the Valentain Marriage Mediya team?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
              Yes, appointments can be scheduled.
            </AccordionContent>
            </div>
        </AccordionItem>

        <AccordionItem value='item-37' className='bg-white dark:bg-white/90 text-black'>
            <div className='px-3'>
              <AccordionTrigger className='text-sm mb-3 md:mb-0 tracking-tighter lg:text-lg lg:px-2'>
                Are marriage media services safe?</AccordionTrigger>
            <AccordionContent className='text-sm text-black/70 px-2 lg:p-4 lg-mt-3
            tracking-tighter'>
              With Valentain Marriage Mediya BD, safety and privacy are prioritized.
            </AccordionContent>
            </div>
        </AccordionItem>

       

      </Accordion>
      </Container>
    </div>
  )
}

export default Faq
