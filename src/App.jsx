import { Accordion } from "./components/Accordion"

export const App = () => {
  const items = [
    {
      id: 1,
      label: 'Can I use React on a project?',
      content: 'You can use React on any project you want. It is a popular front-end library.'
    },
    {
      id: 2,
      label: 'Can I use JavaScript on a project?',
      content: 'You can use JavaScript on any project you want. It is a popular programming language.'
    },
    {
      id: 3,
      label: 'Can I use HTML on a project?',
      content: 'You can use HTML on any project you want. It is a popular markup language'
    }
  ]

  return <Accordion items={items} />
}
