import { Box, InputBase, styled } from '@mui/material'
import { Search as SearchIcon } from "@mui/icons-material"
import SearchManu from './SearchManu';
const Component = styled(Box)`
background:#fff;
height:35px;
border-bottom:1px solid #f2f2f2;
display:flex;
align-item:center;
gap:1rem;
`
const Wrapper = styled(Box)`
background-color:#f0f2f5;
position:relative;
width:100%;
border-radius:10px;
display:flex;
`
const Icon = styled(Box)`
position:absolute;
height:100%;
padding:5px 10px 5px 20px;
color:#919191;
`
const InputField = styled(InputBase)`
width:100%;
padding:10px 65px 0px 65px;
height:25px;
font-size:14px
`

const Search = ({ settext }) => {
  return (
    <Component>
      <Wrapper>
        <Icon>
          <SearchIcon />
        </Icon>
        <InputField onChange={(e) => settext(e.target.value)} placeholder='Search for New Chat' />
        <SearchManu />
      </Wrapper>
    </Component>
  )
}

export default Search