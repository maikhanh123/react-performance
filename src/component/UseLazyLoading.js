import React, { Component, lazy, Suspense } from "react";

export default class UseLazyLoading extends Component {
  render() {
    var ComponentToLazyLoad = null;

    if (this.props.name === "Mayank") {
      ComponentToLazyLoad = lazy(() => import("./MayankComponent"));
    } else if (this.props.name === "Anshul") {
      ComponentToLazyLoad = lazy(() => import("./AnshulComponent"));
    }
    return (
      <div>
        <h1>This is the Base User: {this.props.name}</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <ComponentToLazyLoad />
        </Suspense>
      </div>
    );
  }

  //   render() {
  //     if(this.props.username !== "") {
  //       const WelcomeComponent = lazy(() => import("./welcomeComponent"));
  //       return (
  //           <div>
  //               <Suspense fallback={<div>Loading...</div>}>
  //                   <WelcomeComponent />
  //               </Suspense>
  //           </div>
  //       )
  //     } else {
  //         const GuestComponent = lazy(() => import("./guestComponent"));
  //         return (
  //             <div>
  //                 <Suspense fallback={<div>Loading...</div>}>
  //                     <GuestComponent />
  //                 </Suspense>
  //             </div>
  //         )
  //     }
  // }
}
