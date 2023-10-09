import React from 'react'
import sun from '../../images/thesun-skill.webp'

export const Skills = () => {
    return (
        <>
            <div style={{ height: '50vh', width: '100%' }} className='mb-5'>
                <div class="position-absolute top-25 start-0 mt-4 ms-4"><button class="btn btn-warning"><i class="bi bi-arrow-left"></i></button></div>
                <img
                    src={sun}
                    alt="sun"
                    className="d-block" style={{ objectFit: 'cover', width: '100%', height: '50vh' }}
                />
            </div>

            <div className='container my-5' style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                <div className='mt-5'>
                    <p className='font-semibold' style={{ fontSize: '100px' }}>Skills</p>
                    <p className='fs-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, et asperiores libero aliquid aspernatur porro ad tempora blanditiis earum eligendi dolor sapiente perspiciatis dolores. Adipisci corrupti consequuntur autem, iste nisi molestiae eligendi animi fugit dolorem neque consectetur quisquam deserunt sapiente vero sed iure fugiat eum nesciunt beatae quod laborum. Possimus beatae aperiam architecto expedita magni recusandae alias officia harum minus reprehenderit. Dolore illo blanditiis facilis ab animi non reiciendis perspiciatis magni quidem, magnam, voluptate reprehenderit repellendus id tenetur enim modi quisquam vitae quo ullam aut sequi minima nisi? Assumenda magnam aliquam dolore, deserunt aliquid quo sint, at tenetur saepe recusandae aspernatur, cum iusto repellat odio voluptatibus. Ut officia corporis recusandae reiciendis tenetur, illo ullam dolor suscipit placeat, sed accusamus velit quis nesciunt possimus repudiandae cum quaerat neque nobis qui eius. Quisquam perspiciatis error sed dolores debitis, dicta minima expedita cum officia vel excepturi commodi dignissimos a alias, praesentium odio quasi quos maiores voluptates. Fugiat atque deleniti hic velit magni reiciendis delectus odit. Earum exercitationem animi facilis, tempore veritatis quas explicabo cumque. Molestiae non illo voluptatum unde perspiciatis temporibus quisquam atque, fugiat mollitia exercitationem assumenda, minima consequuntur, voluptates maxime amet impedit est reprehenderit vel? Minus voluptatem dolore quo, possimus eaque provident.</p>
                    <br /><br />
                    <p className='fs-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti sapiente velit eaque at. Cupiditate rerum, recusandae sequi non excepturi aut qui itaque consequuntur nesciunt alias est tempora modi accusantium reiciendis!</p>
                    <br /><br />
                    <p className='fs-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta illo, quod, placeat provident ducimus repudiandae eveniet eius, ut reiciendis impedit ipsam itaque earum. Dolorum ipsum mollitia ullam incidunt? Reprehenderit nam, id soluta aliquam, quis maxime praesentium nulla distinctio minus dignissimos eius, impedit magnam vero facere explicabo obcaecati eligendi officiis dolores.</p>
                    <br /><br />
                    <p className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus esse nobis odit officia ipsa molestiae atque suscipit repudiandae et eum rem officiis optio ipsam ex dolores voluptas velit, dicta itaque fugiat nesciunt error eius fuga! Omnis quod laboriosam voluptates ab harum. Ipsam dolore rerum veniam maiores nulla eaque quidem iusto officiis, adipisci qui. Tempora cumque quas odio eius incidunt ad saepe numquam fugiat officia, pariatur magnam iusto tenetur, perferendis doloremque ipsam illo quidem! Aperiam nostrum dolores recusandae dolorum optio labore velit quo ratione facilis? Minima ab impedit accusamus accusantium vel enim numquam incidunt nulla ea, rem consequuntur culpa dolore debitis.</p>
                    <br /><br />

                    <div class="d-grid gap-2 d-md-block">
                        <button class="btn btn-dark btn-lg mr-5 fs-2"><i class="bi bi-people-fill mr-2"></i>Apply</button>
                        <button class="btn btn-outline-dark btn-lg fs-2"><i class="bi bi-question-circle-fill mr-2"></i>Questions</button>
                    </div>
                </div>
            </div>
        </>

    )
}
