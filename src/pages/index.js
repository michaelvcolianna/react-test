function TestComponent({ key, id, data }) {
  return <div style={{ marginBottom: '1rem' }}>
    ID# {id}
    <pre>{JSON.stringify({ key, data }, null, 2)}</pre>
  </div>
}

export default function Home() {
  const fakeData = [
    {
      id: 1,
      key: 'key-1',
      data: {
        a: 'a',
        b: 'b'
      }
    },
    {
      id: 2,
      key: 'key-2',
      data: {
        a: 'b',
        b: 'c'
      }
    },
    {
      id: 3,
      key: 'key-3',
      data: {
        a: 'c',
        b: 'd'
      }
    },
  ]

  return (
    <div>
      {fakeData.map((props) => {
        const { key, ...passProps } = props

        return <TestComponent key={key} {...passProps} />
      })}
    </div>
  );
}
