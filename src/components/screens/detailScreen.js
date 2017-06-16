import React, { Component } from 'react';
import { 
  TouchableOpacity, Dimensions, Text, 
  View, Image, StyleSheet, Button 
} from 'react-native';

const loadingImg = { 
  uri: require('../../../assets/icons/img-load.gif'),
  width: 400,
  height: 300
};
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class DetailScreen extends Component {
  onButtonPress() {
    return () => { return null };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerArea}>
          <Text style={styles.headerText}>ImageWiz</Text>
        </View>
        <View style={styles.imageArea}>
          <Image 
            defaultSource={loadingImg.uri}
            style={styles.mainImage} 
            source={{ uri: 'https://unsplash.it/500/?random' }}
          />
        </View>
        <View style={styles.buttonArea}>
          <TouchableOpacity onPress={this.onButtonPress} style={[styles.btn, styles.likeBtn]}>
            <Text style={styles.btnText}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onButtonPress} style={[styles.btn, styles.shareBtn]}>
            <Text style={styles.btnText}>Share</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onButtonPress} style={[styles.btn, styles.commentBtn]}>
            <Text style={styles.btnText}>Comment</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.commentsArea}>
          <View style={styles.comment}>
            <Text style={styles.commentText}>Some User: A comment on the picture</Text>
          </View>
          <View style={styles.comment}>
            <Text style={styles.commentText}>Some User: A comment on the picture</Text>
          </View>
          <View style={styles.comment}>
            <Text style={styles.commentText}>
              Some User: A way longer comment on the picture. 
              What happens when there are multiple lines?
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'whitesmoke'
  },
  headerArea: {
    display: 'flex',
    justifyContent: 'center',
    height: 40,
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 14,
    fontWeight: '100'
  },
  imageArea: {
    width: windowWidth,
    height: windowHeight * 0.40
  },
  mainImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  buttonArea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    width: windowWidth
  },
  btn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    marginLeft: 5,
    marginRight: 5
  },
  likeBtn: {
    backgroundColor: '#2196F3'
  },
  commentBtn: {
    backgroundColor: '#009688'
  },
  shareBtn: {
    backgroundColor: '#FF9800'
  },
  btnText: {
    fontSize: 12,
    color: '#fff'
  },
  commentsArea: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'whitesmoke',
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 10,
    width: windowWidth
  },
  comment: {
    backgroundColor: 'white',
    borderColor: '#000',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 10
  },
  commentText: {
    color: '#000',
    fontSize: 12,
    lineHeight: 18
  }
});

export default DetailScreen;