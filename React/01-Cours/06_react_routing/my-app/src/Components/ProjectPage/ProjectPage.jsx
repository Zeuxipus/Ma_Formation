import React from 'react';
import { Link } from 'react-router-dom';

const ProjectPage = () => {
    const id = '123'
    return ( 
    <div>
        <h3>Mes projets</h3>
        <hr />
        <p>projet 1</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, necessitatibus veritatis quos iusto quis, facilis iure molestiae corrupti minima repudiandae officiis est. Laborum, quis aperiam sint officiis dolorum quam modi.
        Dolorem optio veniam suscipit dignissimos totam, ut ipsam nemo, asperiores necessitatibus commodi iusto quaerat aspernatur eum ad quisquam! Hic illo temporibus cumque, facere ea eum quis explicabo cum quos? Quisquam?
        Magni totam eveniet reiciendis amet quae vitae. Repellat maxime id dignissimos quisquam ducimus molestiae eius fugiat deleniti nam est voluptas cumque, velit itaque voluptatibus natus ipsa, reiciendis magnam minima quidem.
        Suscipit in minus totam labore ipsum? Molestias molestiae, tempora asperiores error modi quo beatae quaerat, a sed dolores facere et suscipit expedita, dicta ab. Cum eligendi ut odio cupiditate soluta!
        Voluptatem, quas. Natus laboriosam excepturi reprehenderit nihil rerum assumenda ipsa necessitatibus minima, soluta animi molestias eveniet aliquid deserunt voluptates. Reiciendis beatae temporibus dolore dolores itaque quos nemo officiis dignissimos. Nesciunt.</p>
        <Link to={`/projects/1`}>Lien vers mon projet</Link>
        <hr />
        <h5>projet 2</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, sed earum minus, debitis expedita, commodi enim animi nihil iste facilis natus in sapiente. Minima est hic iusto tempora accusantium quos?
        Ullam accusamus consequatur, tenetur numquam, quo optio eaque fuga ex corrupti, autem placeat vero. Cumque a minus porro expedita tempora! Rerum vitae doloribus nihil recusandae, sapiente inventore soluta. Excepturi, at.
        Aut ipsum in est aliquid id incidunt corporis, sed nemo quam eaque blanditiis illo nihil, quasi repudiandae repellat sint facere dolor labore? Eum maxime perferendis eaque possimus tempora? Praesentium, sequi.
        Voluptates laudantium perspiciatis provident reprehenderit. Illo, culpa voluptate tenetur, modi reiciendis eos eum nobis accusamus quidem porro, nulla possimus? Eum neque ad nihil? Voluptate quae tempora eligendi ratione, autem magnam?
        Inventore nostrum non nemo dicta veniam voluptatibus officiis. Ratione beatae magni accusamus itaque quod sunt iste atque ipsum, similique esse illum vel molestiae aperiam quis reiciendis vero quaerat nam doloremque.</p>
        <Link to={`/projects/2`}>Lien vers mon projet</Link>
</div> 
    );
}
 
export default ProjectPage;