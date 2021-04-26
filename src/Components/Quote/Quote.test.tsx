import { render, screen,  } from "@testing-library/react"
import { Quote } from "./Quote"
import quotes from './quotes.json'

 
describe('when rendered', () => {
  const quoteStub = quotes[1]
  it('should contain an expected text', () => {
     render(<Quote quote={quoteStub}/>)

    const result = screen.getByText(quoteStub.text)

    expect(result).toBeInTheDocument()
  })

  it('shoud contain an expected author', () => {
    render(<Quote quote={quoteStub}/>)

    const result = screen.getByText(new RegExp( quoteStub.author))

    expect(result  ).toBeInTheDocument()
  })
})