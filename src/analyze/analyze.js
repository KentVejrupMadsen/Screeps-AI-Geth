module.exports =
{
  state_detection( pipe )
  {
    code_red( pipe );
    detect_current_resources( pipe );
    is_damaged( pipe );
    squads_management( pipe );
  },

  map_zone( pipe )
  {
      map_flags( pipe );
      map_resources( pipe );
      map_pathways( pipe );
      map_constructions( pipe );
      map_zones( pipe );
  }




}


// detect foreign invaders or if something is being attacked.
function code_red( pipe )
{

};


// Current state
function detect_current_resources( pipe )
{

};


// buildings in need of repair.
function is_damaged( pipe )
{

};


// squads and units. that needs new units and healing of wounded.
function squads_management( pipe )
{

};


function map_flags( pipe )
{

};


function map_resources( pipe )
{

};


function map_constructions( pipe )
{

};

function map_zones( pipe )
{

};

function map_pathways( pipe )
{

};
