interface header {
  bigtext: string
  description: string
  emoji: string
  smalltext: string
}

interface aboutCategory {
  _id: string
  text: { _type: string }[] // Not the whole object
  heading: string
  smallheading: string
}

interface about {
  heading: string
  smallheading: string
  subheading: string
  aboutCategories: aboutCategory[]
}

interface appearance {
  _id: string
  description: {
    _type: string
  }[]
  heading: string
  image: object[]
  testimonial?: string
  testimonialAuthor?: string
}

interface appearances {
  heading: string
  smallheading: string
  subheading: string
  appearances: appearance[]
}

interface cta {
  image: object[]
  btntext: string
  description: string
  heading: string
}

interface show {
  _id: string
  heading: string
  teaser: object[]
  image: object[]
}

interface shows {
  heading: string
  smallheading: string
  subheading: string
  shows: show[]
}

interface question {
  _id: string
  question: string
  answer: string
}

interface faq {
  heading: string
  smallheading: string
  subheading: string
  questions: question[]
}

export interface homepageQueryType {
  header: header
  about: about
  appearances: appearances
  cta: cta
  shows: shows
  faq: faq
}

/**
 * ,
  'logos':*[_type == "logos"] {
    images
  }[0],
  'aboutSection':*[_type == "aboutSection"] {
  heading, 
  smallheading, 
  subheading, 
  aboutCategories[]-> {
    _id,
    text, 
    heading,
    smallheading
  }
}[0],
'tvSection':*[_type == "tvSection"] {
  heading,
  smallheading,
  subheading,
  appearances[0...2]->{
    _id,
    description,
    heading,
    image,
    testimonial,
    testimonialAuthor
  }
}[0],
'smallcontact':*[_type == "smallcontact"] {
  image,
  btntext,
  description,
  heading
},
'showsSection':*[_type == "showsSection"] {
  heading,
  smallheading,
  subheading,
  'shows': *[_type == "show"] {
  _id,
  heading,
  teaser
}
}[0],
'faqSection':*[_type == "faqSection"] {
  heading, 
  smallheading,
  subheading,
  questions[]-> {
    _id, question, answer
  }
}[0]
}
 */
