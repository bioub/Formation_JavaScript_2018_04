/**
 * Created by romain on 05/12/14.
 */


// for(var nb=2; nb<Number.MAX_VALUE; nb++)
for(var nb=1000000; nb<Number.MAX_VALUE; nb++)
{
    var isPremier = true;

    for(var diviseur=nb-1; diviseur>1; diviseur--)
    {
        var division = nb / diviseur;

        if(division - Math.floor(division) === 0 )
        {
            isPremier = false;
            break;
        }
    }

    if(isPremier)
    {
        postMessage(nb);
    }
}