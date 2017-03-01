# react-native-app-style

react native style을 중앙에서 관리 함.
react native 기본 UI를 style을 적용하기 위해 wrapper class 형태로 

```

import {View} from "react-native"

<View style={{flex:1, }}>
</View>

```

```
// style file
const style ={
  
  view:{// View 기본 스타일을 
    backgroundColor: 'green',
  },
  
 
  '.app':{ // html css 와같이 class name은 .을 찍어서 처리 
    flex:1,
  },

  'view.app':{
    width:100,
  }
}


import * as Styled from "react-native-app-style"
import styledComponent, { AppStyle } from "react-native-app-style/style"

<AppStyle styleInfo={style}>
<Styled.View cN="app">
</Styled.View>
</AppStyle>

```



