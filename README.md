# React-memo-optimize-renders

actually whenever parent component re-renders, the child component will be re-rendered every time it is the rule of react.

in some cases we don't want that. another words, when I re-renders parent component for example i type something input of a parent component, in this case I don't want to re-render child component. in this case React has introduced `memo`, `useMemo` and `useCallBack` hooks, to optimize the preformance of the application.

if you wrap your child component with `React.memo` the child component will not be re-rendered. and if we pass `primitive types` like `string` `number` `boolean` the child component, in this case also child component will not be re-rendered.

But if we pass `function` or `object` prop to child component, in this case the child component will be re-rendered, to prevent that happen. we use `useCallBack` for functions and `useMemo` for objects.

```js
const [text, setText] = useState('')
const [text2, setText2] = useState('')

const onOdd = useCallBack(() => {
  setText('')
}, [setText2])

const data = useMemo(() => ({
  text2,
  isEven: text2.length % 2 === 0
}), [text2])

return (
    <div className="App">
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <input placeholder='text2' value={text2} onChange={(e) => setText2(e.target.value)} />
      <Count onOdd={onOdd} data={data} />
    </div>
);
```
