export enum DemoType {
    Kmm = 'kmm',
    Sample = 'sample'
} 
  
export const DemoCards: Array<DemoContent> = [
    { 
      heading: 'Create my first KMM', 
      description: 'Work on the KMM(Kotlin Multiplatform Mobile) app for the first time.', 
      type: DemoType.Kmm, 
      image_url: 'https://raw.githubusercontent.com/tommykw/lab/afcde6b97c75efbfd897520f8ec7d7504b7115d7/src/public/kmm.png'
    },
    { 
      heading: 'Demo card', 
      description: 'This is a demo card. This is a demo card. This is a demo card. This is a demo card. This is a demo card.', 
      type: DemoType.Sample, 
      image_url: 'https://raw.githubusercontent.com/tommykw/lab/173b630a47759f0593c4efc660ea496dc3f995b2/src/public/sample.png'
    },
    { 
      heading: 'Demo card', 
      description: 'This is a demo card. This is a demo card. This is a demo card. This is a demo card. This is a demo card.', 
      type: DemoType.Sample, 
      image_url: 'https://raw.githubusercontent.com/tommykw/lab/173b630a47759f0593c4efc660ea496dc3f995b2/src/public/sample.png'
    },
    { 
      heading: 'Demo card', 
      description: 'This is a demo card. This is a demo card. This is a demo card. This is a demo card. This is a demo card.', 
      type: DemoType.Sample, 
      image_url: 'https://raw.githubusercontent.com/tommykw/lab/173b630a47759f0593c4efc660ea496dc3f995b2/src/public/sample.png'
    },
    { 
      heading: 'Demo card', 
      description: 'This is a demo card. This is a demo card. This is a demo card. This is a demo card. This is a demo card.', 
      type: DemoType.Sample, 
      image_url: 'https://raw.githubusercontent.com/tommykw/lab/173b630a47759f0593c4efc660ea496dc3f995b2/src/public/sample.png'
    },
    { 
      heading: 'Demo card', 
      description: 'This is a demo card. This is a demo card. This is a demo card. This is a demo card. This is a demo card.', 
      type: DemoType.Sample, 
      image_url: 'https://raw.githubusercontent.com/tommykw/lab/173b630a47759f0593c4efc660ea496dc3f995b2/src/public/sample.png'
    },
    { 
      heading: 'Demo card', 
      description: 'This is a demo card. This is a demo card. This is a demo card. This is a demo card. This is a demo card.', 
      type: DemoType.Sample, 
      image_url: 'https://raw.githubusercontent.com/tommykw/lab/173b630a47759f0593c4efc660ea496dc3f995b2/src/public/sample.png'
    }
]
  
interface DemoContent {
    heading: string,
    description: string,
    type: DemoType,
    image_url: string
}
  