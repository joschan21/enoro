const questions = [
  {
    type: 'single_select',
    title: 'Was ist der Anlass?',
    subtitle: '',
    options: [
      {
        img: '/birthday_icon.png',
        caption: 'Geburtstag',
      },
      {
        img: '/weddings_rings_marriage.png',
        caption: 'Hochzeit',
      },
      {
        img: '/briefcase_icon.png',
        caption: 'Firmenfeier',
      },
      {
        img: '/arrow_right.png',
        caption: 'Sonstiges',
      },
    ],
  },
  {
    type: 'single_select',
    title: 'Wie lange möchten Sie unterhalten werden?',
    subtitle: '',
    options: [
      {
        img: '/duration_first.png',
        caption: '< 1 Stunde',
      },
      {
        img: '/duration_second.png',
        caption: '1 - 2 Stunden',
      },
      {
        img: '/duration_third.png',
        caption: '2+ Stunden',
      },
      {
        img: '/arrow_right.png',
        caption: 'Sonstiges',
      },
    ],
  },
  {
    type: 'single_select',
    title: 'Wie viele Personen sind anwesend?',
    subtitle: '',
    options: [
      {
        img: '/group_first.png',
        caption: '< 20',
      },
      {
        img: '/group_second.png',
        caption: '20 - 100',
      },
      {
        img: '/group_third.png',
        caption: 'Über 100',
      },
      {
        img: '/arrow_right.png',
        caption: 'Sonstiges',
      },
    ],
  },
  {
    type: 'multiple_select',
    title: 'Wer ist anwesend?',
    subtitle: 'Diese Angabe hilft mir, die idealen Zaubertricks für Ihre Gäste auszuwählen.',
    maxOptions: 3,
    options: [
      {
        img: '/who_is_present_first.png',
        caption: 'Kinder',
      },
      {
        img: '/who_is_present_second.png',
        caption: 'Erwachsene',
      },
      {
        img: '/who_is_present_third.png',
        caption: 'Senioren',
      },
    ],
  },
  {
    type: 'personal_info',
    title: 'Weitere Angaben',
    subtitle: 'Gibt es Details, die bisher nicht erwähnt wurden?',
  },
  {
    type: 'thank_you',
    title: 'Vielen Dank!',
    subtitle:
      'Ihre Nachricht wurde erfolgreich zugestellt. Ich werde mich schnellstmöglich bei Ihnen melden.',
  },
]

export default questions
