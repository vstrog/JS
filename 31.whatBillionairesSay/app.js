const QUOTES = [
    {
        name: 'Jeff Bezos',
        quote: 'I believe you have to be willing to be misunderstood if you\'re going to innovate.'
    },
    {
        name: 'Jeff Bezos',
        quote: 'Life\'s too short to hang out with people who aren\'t resourceful.'
    },
    {
        name: 'Jeff Bezos',
        quote: 'There\'s no bad time to innovate.'
    },
    {
        name: 'Sara Blakely',
        quote: 'We don\'t have the luxury of time. We spend more because of how we live, but it\'s important to be with our family and friends.'
    },
    {
        name: 'Sara Blakely',
        quote: 'It\'s important to be willing to make mistakes. The worst thing that can happen is you become memorable.'
    },
    {
        name: 'Sara Blakely',
        quote: 'We can make the world a better place, one butt at a time.'
    },
    {
        name: 'Michael Bloomberg',
        quote: 'Taxes are not good things, but if you want services, somebody\'s got to pay for them so they\'re a necessary evil.'
    },
    {
        name: 'Michael Bloomberg',
        quote: 'To a contrarian like me, constant advice not to do something almost always starts me quickly down the risky, unpopular path.'
    },
    {
        name: 'Michael Bloomberg',
        quote: 'I don\'t know why you should be proud of something. It doesn\'t make you any better or worse. You are what you are.'
    },
    {
        name: 'Warren Buffett',
        quote: 'There seems to be some perverse human characteristic that likes to make easy things difficult.'
    },
    {
        name: 'Warren Buffett',
        quote: 'Of the billionaires I have known, money just brings out the basic traits in them. If they were jerks before they had money, they are simply jerks with a billion dollars.'
    },
    {
        name: 'Warren Buffett',
        quote: 'If past history was all there was to the game, the richest people would be librarians.'
    },
    {
        name: 'Larry Ellison',
        quote: 'When you innovate, you\'ve got to be prepared for everyone telling you you\'re nuts.'
    },
    {
        name: 'Larry Ellison',
        quote: 'I believe people have to follow their dreams--I did.'
    },
    {
        name: 'Larry Ellison',
        quote: 'I have had all of the disadvantages required for success.'
    },
    {
        name: 'Bill Gates',
        quote: 'Success is a lousy teacher. It seduces smart people into thinking they can\'t lose.'
    },
    {
        name: 'Bill Gates',
        quote: 'We make the future sustainable when we invest in the poor, not when we insist on their suffering.'
    },
    {
        name: 'Bill Gates',
        quote: 'Your most unhappy customers are your greatest source of learning.'
    },
    {
        name: 'Elon Musk',
        quote: 'When something is important enough, you do it even if the odds are not in your favor.'
    },
    {
        name: 'Elon Musk',
        quote: 'The only thing that makes sense is to strive for greater collective enlightenment.'
    },
    {
        name: 'Elon Musk',
        quote: 'The single best piece of advice: Constantly think about how you could be doing things better and questioning yourself.'
    },
    {
        name: 'Larry Page',
        quote: 'Especially in technology, we need revolutionary change, not incremental change.'
    },
    {
        name: 'Larry Page',
        quote: 'If you\'re changing the world, you\'re working on important things. You\'re excited to get up in the morning.'
    },
    {
        name: 'Larry Page',
        quote: 'We don\'t have as many managers as we should, but we would rather have too few than too many.'
    },
    {
        name: 'J. K. Rowling',
        quote: 'It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all, in which case you have failed by default.'
    },
    {
        name: 'J. K. Rowling',
        quote: 'It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.'
    },
    {
        name: 'J. K. Rowling',
        quote: 'It is our choices ... that show what we truly are, far more than our abilities.'
    },
    {
        name: 'George Soros',
        quote: 'The worse a situation becomes, the less it takes to turn it around, the bigger the upside.'
    },
    {
        name: 'George Soros',
        quote: 'Unrestrained competition can drive people into actions that they would otherwise regret.'
    },
    {
        name: 'George Soros',
        quote: 'An open society is a society that allows its members the greatest possible degree of freedom in pursuing their interests compatible with the interests of others.'
    },
    {
        name: 'Oprah Winfrey',
        quote: 'What God intended for you goes far beyond anything you can imagine.'
    },
    {
        name: 'Oprah Winfrey',
        quote: 'Real integrity is doing the right thing, knowing that nobody\'s going to know whether you did it or not.'
    },
    {
        name: 'Oprah Winfrey',
        quote: 'Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure.'
    },
    {
        name: 'Mark Zuckerberg',
        quote: 'The biggest risk is not taking any risk ... In a world that\'s changing really quickly, the only strategy that is guaranteed to fail is not taking risks.'
    },
    {
        name: 'Mark Zuckerberg',
        quote: 'I think a simple rule of business is, if you do the things that are easier first, then you can actually make a lot of progress.'
    },
    {
        name: 'Mark Zuckerberg',
        quote: 'I think that people just have this core desire to express who they are. And I think that\'s always existed.'
    },

];


const QUOTE_BTN = document.querySelector('#quoteBtn');
const QUOTE_AUTHOR = document.querySelector('#quoteAuthor');
const QUOTE = document.querySelector('#quote');

QUOTE_BTN.addEventListener('click', displayQuote);

function displayQuote() {
    let number = Math.floor(Math.random()*QUOTES.length);
    QUOTE_AUTHOR.innerHTML = QUOTES[number].name;
    QUOTE.innerHTML = QUOTES[number].quote;
}