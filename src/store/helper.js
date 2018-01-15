export function deriveMaxSaints(state) {
  return Array.from
          (new Set((
          state.templesMaster.filter(itm => state.selStates.indexOf(itm.StateId) >-1)
          .map(a => a.SaintId))
          .reduce((acc, a) => acc.concat(a),[])
          ));
}

export function deriveMaxTemples(state) {

  return Array.from
          (new Set((
          state.templesMaster.filter(itm => (
            (state.selStates.indexOf(itm.StateId) >-1)
            &&
            // atleast one element of saintarray in this temple itm is in selSaints
            (itm.SaintId.filter(function(n) {
                return state.selSaints.indexOf(n) > -1;
              }).length > 0
            )
          ))
          .map(a => a.Id))
          .reduce((acc, a) => acc.concat(a),[])
          ));
}
export function deriveMaxSongs(state) {
  return Array.from
          (new Set((
          state.templesMaster.filter(itm => state.selTemples.indexOf(itm.Id) >-1)
          .map(a => a.SongId))
          .reduce((acc, a) => acc.concat(a),[])
          ));
}

export var rawStatesMaster = [{"Id":1,"Name":"Tamilnadu"}, {"Id":2,"Name":"Kerala"}, {"Id":3,"Name":"Andhra"}];

// end helper functions
