export const guest=(to, from, next)=>{
  if(!localStorage.getItem('crew_mangement_token') ){
    next();
  }
  else{
    next({name:'Home'});
  }

};
export const auth=(to, from, next)=>{
  // if(localStorage.getItem('krbs_circular_token')){
  //   next();
  // }
  // else{
  //   localStorage.clear();
  //   next({name:'Login'});
  // }

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // console.log(from, 'this is from');
    if (localStorage.getItem('crew_mangement_token') != null) {
      next();
      return;
    }
    next({name:'Login'});
  } else {
    next();
  }

};
