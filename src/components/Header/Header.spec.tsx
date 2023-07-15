import { render } from '@testing-library/react'
import { Header } from './index'

test('sum', () => {
  const { getByText } = render(<Header />)
  expect(getByText('Nova transação')).toBeInTheDocument()
})
