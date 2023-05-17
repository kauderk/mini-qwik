import { component$ } from '@builder.io/qwik'

export default component$(() => {
  console.log('mount app')
  return (
    <h1>
      {' '}
      Welcome To Mini Qwik{' '}
      <button onClick$={() => console.log('hello')}>Click</button>{' '}
    </h1>
  )
})
