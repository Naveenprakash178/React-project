import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

function SkeletonWithText() {
  return (
    <Typography>
      {/* <Skeleton
        sx={{ bgcolor: 'lightgreen' }}
        variant="text"
        width={980}
        height={118}
      >
        NAVEEN'S MARKDOWN VIEWER */}
        
        <Skeleton
  sx={{ bgcolor: 'lightgreen', textAlign: 'center' }}
  variant="text"
  width={980}
  height={118}
>
{/* <Typography variant="h4" fontWeight="bold"> */}
   <h1>he</h1> Naveen's
    Markdown
    Viewer
  {/* </Typography> */}
</Skeleton>

      {/* </Skeleton> */}
    </Typography>
  );
}

export default SkeletonWithText;
// import Skeleton from '@mui/material/Skeleton';

// const styles = {
//   skeletonContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100%',
//   },
// };

// function MyComponent() {
//   return (
//     <Skeleton
//       sx={{ bgcolor: 'lightgreen' }}
//       variant="text"
//       width={980}
//       height={118}
//     >
//       <div style={styles.skeletonContainer}>
//         <span style={{ textAlign: 'center' }}>Naveen</span>
//       </div>
//     </Skeleton>
//   );
// }
// export default MyComponent;
