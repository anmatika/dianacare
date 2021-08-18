export default function hello(req: any, res: any) {
  res.status(200).json({ name: 'John Doe' })
}