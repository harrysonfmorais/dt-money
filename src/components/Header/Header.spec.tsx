import { render } from '@testing-library/react'
import { Header } from '.'

test('sum', () => {
  const { getByText } = render(<Header />)
  expect(getByText('Nova transação')).toBeInTheDocument()
})
