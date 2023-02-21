import {Heading, CustomButton} from './styledComponents'

const App = () => (
  <>
    <Heading>Hello World</Heading>
    <CustomButton type="button" color="#ffffff" bgColor="#0070c1">
      Click
    </CustomButton>
    <CustomButton type="button" color="#0070c1" bgColor="#ffffff">
      Click
    </CustomButton>
  </>
)

export default App
