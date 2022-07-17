import { Column, Text } from '@src/components'

const ProgressBar = (props: any) => {
  const { progress, label } = props;

  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 20,
  }

  const fillerStyles = {
    paddingTop: '0.2rem',
    paddingRight: '1rem',
    height: '100%',
    width: `${progress}%`,
    backgroundColor: "black",
    borderRadius: 'inherit'
  }

  return (
    <Column width={'100%'} px={['0','1rem']} py={['1rem','2rem']}>
    <Text fontSize={['1.8rem']} fontFamily={'Roboto'} fontWeight={400} lineHeight={'1.2'}>{label}</Text>
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <Text color={'white'} fontWeight={'bold'} backgroundColor={'transparent'} fontSize={'1.5rem'} textAlign={'right'} >{progress}%</Text>
      </div>
    </div>
    </Column>

  );
}

export default ProgressBar
