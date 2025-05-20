function TestComponent({ key, data, children }) {
  return <div>
    <pre>{JSON.stringify({ key, data }, null, 2)}</pre>
    {children}
  </div>
}

export default function Home() {
  return (
    <div>
      <TestComponent {...{ key: 'key', data: 'data' }}>
        So this is passing "key" but since that's a reserved word, we can't use it.
      </TestComponent>
    </div>
  );
}
