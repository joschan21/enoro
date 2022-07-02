export const homepageQuery = `
{
  'header':*[_type == "header"] {
bigtext,
  description,
  emoji,
  smalltext
}[0],
  'about':*[_type == "about"] {
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
'appearances':*[_type == "appearances"] {
  heading,
  smallheading,
  subheading,
  appearances[]->{
    _id,
    description,
    heading,
    image,
    testimonial,
    testimonialAuthor
  }
}[0],
'cta':*[_type == "cta"] {
  btntext,
  description,
  heading
}[0],
'shows':*[_type == "showsSection"] {
  heading,
  smallheading,
  subheading,
  'shows': *[_type == "show"] {
  _id,
  heading,
  image,
  teaser
}
}[0],
'faq':*[_type == "faq"] {
  heading, 
  smallheading,
  subheading,
  questions[]-> {
    _id, question, answer
  }
}[0]
}
`
