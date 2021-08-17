export default function MapInfoWindow(props: any) {
  const { phone, address, email } = props.data

  const mailtoText = `mailto: ${email}`

  return <div className="prose-xs">
    <div className="flex items-center">
      <img
        className="block h-7 w-auto mr-1 hidden sm:block"
        src="/images/rose.png"
        alt="logo"
      />
      <h1>sandihoiva</h1>
    </div>
    <div className="p-3">
      <div >
        <i className="fas fa-map-marker-alt mr-1"></i>
        {address}
      </div>
      <div>
        <i className="fas fa-phone-square mr-1"></i>
        {phone}
      </div>
      <div>
        <i className="fa fa-envelope mr-1" aria-hidden="true"></i>
        <a href={mailtoText}>{email}</a>
      </div>
    </div>
  </div >

}