import React, { Component } from 'react';
import { 
  TouchableOpacity, Dimensions, Text, 
  View, Image, StyleSheet, Button, TextInput
} from 'react-native';

const hamburger = { 
  uri: require('../../../assets/icons/hamburger.png')
};

const loadingImg = { 
  uri: require('../../../assets/icons/loading-img.png'),
  width: 400,
  height: 400
};

const articleGroups = ['Some Random Header 1', 'Some Random Header 2'];

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class NewsLandingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Search...' };
  }

  onButtonPress() {
    return () => { return null };
  }

  renderImageGroup(title, key) {
    return (
      <View key={key}>
        <View style={styles.headerArea}>
          <Text style={styles.headerText}>{title}</Text>
        </View>
        <View style={styles.imageGroupArea}>
          <View style={styles.imageGroupAreaCol2}>
            <Image 
              defaultSource={loadingImg.uri}
              style={styles.imageGroupImage} 
              source={{ uri: 'https://unsplash.it/250/250/?random' }}
            />
          </View>
          <View style={styles.imageGroupAreaCol2}>
            <Image 
              defaultSource={loadingImg.uri}
              style={styles.imageGroupImage} 
              source={{ uri: 'https://unsplash.it/250/250/?random' }}
            />
          </View>
        </View>
        <View style={styles.textArea}>
          <Text style={styles.textAreaText}>
            This is a bunch of smaller text that is giving information about
            the two images up above. You might see this kind of a design on 
            a news site.
          </Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navArea}>
          <TouchableOpacity style={styles.menuButton} onPress={this.onButtonPress}>
            <Image style={styles.navImg} source={hamburger.uri} />
          </TouchableOpacity>
          <TextInput 
            style={styles.searchBar} 
            onChangeText={(text) => this.setState({text}) }
            onFocus={() => this.setState({ text: '' })}
            onBlur={() => this.setState({ text: 'Search...' })}
            value={this.state.text}
          />
        </View>
        <View style={styles.bannerArea}>
          <Image 
            defaultSource={loadingImg.uri}
            style={styles.stretchImage} 
            source={{ uri: 'https://unsplash.it/500/?random' }}
          />
        </View>
        { articleGroups.map((group, i) => this.renderImageGroup(group, i)) }
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
  navArea: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    height: windowHeight * 0.07
  },
  navImg: {
    width: 30,
    height: 30
  },
  menuButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: windowWidth * 0.1
  },
  searchBar: {
    fontSize: 12,
    backgroundColor: '#fff',
    width: windowWidth * 0.9,
    padding: 5,
    borderLeftWidth: 1
  },
  headerArea: {
    width: windowWidth,
    padding: 10
  },
  headerText: {
    fontSize: 18,
    fontWeight: '100'
  },
  bannerArea: {
    width: windowWidth,
    height: windowHeight * 0.20
  },
  stretchImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  imageGroupArea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth
  },
  imageGroupAreaCol2: {
    width: windowWidth * 0.50,
    height: windowHeight * 0.14
  },
  imageGroupImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  textArea: {
    width: windowWidth,
    padding: 10,
    backgroundColor: '#fff'
  },
  textAreaText: {
    fontSize: 12,
    lineHeight: 18
  }
});

export default NewsLandingScreen;