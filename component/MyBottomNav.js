import React from 'react'
import {View} from 'react-native'
import {Button} from 'react-native-paper'

// export default function MyBottomNav2 () {
//   return (
//     <View style={{flexDirection: 'row'}}>
//       <Button mode='contained' style={{flex: 1}}>
//         Elon
//       </Button>

//       <Button mode='contained' style={{flex: 1}}>
//         Einstein
//       </Button>

//       <Button mode='contained' style={{flex: 1}}>
//         Tesla
//       </Button>
//     </View>
//   )
// }

class MyBottomNav extends React.Component {
  render () {
    return (
      <View style={{flexDirection: 'row'}}>
        <Button mode='contained' style={{flex: 1}}>
          Elon
        </Button>

        <Button mode='contained' style={{flex: 1}}>
          Einstein
        </Button>

        <Button mode='contained' style={{flex: 1}}>
          Tesla
        </Button>
      </View>
    )
  }
}

export default MyBottomNav
