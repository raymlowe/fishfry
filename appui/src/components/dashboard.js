import React from "react";

export const Dashboard = (data) => {

    let listOfBoats = data.lanes.map((swimLane, index) => {
      const laneName = swimLane.status;
      let boatNames = JSON.parse(swimLane.boatName)
      console.log(laneName);
      console.log(boatNames);

      return (
        <div className="swimLane">
          <h2>{laneName}</h2>
          {boatNames.map(boatName => (
            <span>
               {boatName}
            </span>
        ))}
        </div>
      )

    });
    

    return (
        <>
          <div className="stock-container">
            {listOfBoats}
          </div>
        </>
      );
};

export default Dashboard



// oneBoxRecords = searchOneBoxContainer.children.map((child,index) => {
            
//     //Rendering all of its records
//     const oneboxTitle = findFieldValue('Title', child.fields)
//     const oneboxUrl = findFieldValue('URL', child.fields)
//     //const oneboxTrigger = findFieldValue('Triggers', child.fields)
//     const oneboxDescription = findFieldValue('Description', child.fields)
//     const oneboxImageUrl = findFieldValue('Image URL', child.fields)
//     const oneboxImageAltText = findFieldValue('Image Alt Text', child.fields)
//     //const oneboxDatePublished = findFieldValue('oneboxDatePublished', child.fields)

//     let imageHTML = ''
//     if(oneboxImageUrl && oneboxImageAltText){
//         imageHTML = <div className = 'oneBoxItemImage'><a href={oneboxUrl}><img src={oneboxImageUrl} alt={oneboxImageAltText}></img></a></div>
//     }

//     return(
//         <div className = "oneboxItem" key={oneboxTitle}>
//             {imageHTML}
//             <h3 className = 'MosaicTitle'>{oneboxTitle}</h3>
//             <div className = 'mosaicDescription'>{oneboxDescription}</div>
//             <div className="oneBox_moreInfo">
//                 <span><a href={oneboxUrl}>More info</a></span>
//             </div>
//         </div>
//     )
// })
// }

