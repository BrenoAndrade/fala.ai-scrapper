module.exports = {
 pages: [
    { url: 'http://www.portodesantos.com.br/en/ship-tracker/scheduled-arrivals/', table: '#programados', formater: shipArr => {
      return {
        date: shipArr[0],
        hour: shipArr[1],
        place: shipArr[2],
        ship: shipArr[3],
        cargo:  shipArr[4],
        event: shipArr[5],
        voyage: shipArr[6],
        duv: shipArr[7]
      }
    }},
    { url: 'http://www.portodesantos.com.br/en/ship-tracker/berthed-ships/', table: '#atracados', formater: shipArr => {
      return {
        place: shipArr[0],
        ship: shipArr[1],
        cargo:  shipArr[6],
      }
    }}
  ],
  accountKey: {
    "type": "service_account",
    "project_id": "fala-ai-portohacksantos",
    "private_key_id": "6ab322affc5f06ab370e9dd4401f5e1109258503",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDGhUeOIs8+RFOM\nNdxd39sM/Bas92nCqLgSkveQMj7Mu2NUPDNV5geIwq1bZydd0cnnlHST4I+KRYXg\n5GbzrAfjWia8qQEIMu1EA2W4mrkCdA9CZtUT1tz9BGureCvH2Q5Istmm2jfi76dz\nSRVvKmYHghhwM86UJVAjm47aPcwfDG5ItLcLCs1HvkLyPEbD9sa0K+p73yIkTiHK\nB0Mhd+wMSnbadUpIysuIW3VHG0sqXmPUFdQcQxz6XaE664n5Ok6zB8yxOGID7mQq\nc1BJhKMXJE7EGUZVpXVFPFTxdBYR20H/dBq1XiOf/wAy2GzCB4S/fL2G1uInuapl\nIDpeVLPbAgMBAAECggEAEHyyLXpI8ZgVbjrCPfj2RXT24c+Ryi0JTeBEd4Z3aQ5p\nA0O//wghzmMIqGN/7/lD25vx4J7Q8lVazIt7h2IyrNg9s65qMQb1uzp4VhAM1x4n\nbvGBDGrsTdvHoLp+vFQTrR2kGN4yWle39Z73Yj+dsKLxKk8LKYo9xm9ID7+mdlou\n+oe9YAUQ7846A+XbTExrfG1IaDss1nbcSX2Lfk7n6cRZLHtsFhK6H1t3rf8fJRdJ\nsyHbI0n11G9zNt2TJ6vVbYyhqEwxB78ekYSX28Wv5kf42Xax5hmh7c00oMztMzVk\n1xe2pCNrMLaHZnaO6qblgTJgJ+ML1ddJzedfHCprRQKBgQDoEe5LuAE4blt9v4kC\ndU+zYYzFqt4lOjGYLiuTQfmifv6XwiqX9ZLsUBTNLlE5j651oSjkMo5KwvzedZcW\nmCnvi2wLWavTPVIS29tX4VF3WOxCWWmhAwKOJRKQt7MuiVf0zlpQNGP/5l3u2xmk\nhGP325eVerVuRNRF0ZdtnTWGbwKBgQDa/bpT+azK581PvVkJtfoP33gO6deKJOkm\nB0ree6zvWP9heWO/OnalTwtSMrryy2r+7mTWpg76+fon/1NGHNtb/kUxy+tI/NWL\nJxvKM78jDxGzmG7Iucv8Z2fu+sGeJUAYU2roCl6Q3rKVLCl8NzAy+s52IrKZFoKr\nOH28/wJ/VQKBgB9XhJpfUHLhnKOgAY3+b/QnAY8Uo4ndkSMfYS0zJNbIVfQC+iOp\nu90Ed7q6PagLeqFSUaZ4GXWJXgNhWDVp+YfriX0C8EzIJFR9suLsgEchEE9pqfVf\n5bFy2k4HMUDgtatPTy0z1imSYC9JEe6BHsszsgYzG1u4Gf8P7maUa80rAoGBAM64\nnzBwSw3LHYN9YVSKZQCg2etyENZGG5SbY7B7nPbf00uHVIKKxL8ty6kPXGyfW2RF\nVAlP/moqmVsyacCQsv23HEhyj6t5iHdwNop8qJyGuBYJ+eIfiZC9aF4udaE81rFf\n5VYfm78zie7JHmw0iJpHKahY/rEGj9jjXcaQDyJ1AoGAJCj7MMwv40CP9j1yO6V6\nQ1UZjAK9juMc+OunCL/b0xmR29WCO5nm81bBBMLpL/gcNLH84hBD5wfancxcmTMP\nzVGxDdYZHdBwmTHgV8GlmHU4efqO9M71n+eY3p9nk2SpwNp8ElxKwTrxWMnXVptx\nG/6rRd9j1O0ShRdGS2Wkp24=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-3qvpn@fala-ai-portohacksantos.iam.gserviceaccount.com",
    "client_id": "106364994627247751805",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-3qvpn%40fala-ai-portohacksantos.iam.gserviceaccount.com"
  }
}