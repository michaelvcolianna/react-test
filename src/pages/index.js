function TestComponent({ key, data, children }) {
  return <div>
    <pre>{JSON.stringify({ key, data }, null, 2)}</pre>
    {children}
  </div>
}

export default function Home() {
  return (
    <div>
      <TestComponent key="test" {...{ data: 'data' }}>Above should be the "key" and "data" props.</TestComponent>
    </div>
  );
}
