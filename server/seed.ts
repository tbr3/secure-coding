import { db, Post, postsTable } from "./db";

const posts: Post[] = [
    {
        title: "Lorem ipsum dolor sit amet",
        content: "Donec varius, risus quis congue pharetra, orci erat pellentesque lorem, vitae egestas risus lorem sit amet augue. Nulla sollicitudin nibh ac finibus condimentum. Praesent a massa sit amet dui scelerisque fermentum. Nulla egestas lectus non leo scelerisque malesuada. Morbi eu ipsum dignissim, pharetra quam vel, commodo augue. Etiam aliquam vel tellus id egestas. Integer gravida, lectus sed ultrices posuere, sem mauris pellentesque mauris, sed efficitur arcu dui sed purus. Sed vitae cursus arcu. Ut gravida euismod volutpat. Phasellus et mi eu turpis dapibus ultrices. Donec quis orci in lacus lacinia posuere. Suspendisse posuere mi in ipsum feugiat, nec condimentum lorem cursus. Praesent id erat sed ante aliquam sagittis ac id felis. In quis tellus at elit auctor luctus feugiat in sem.",
        image: "http://placeimg.com/640/480/nature"
    },
    {
        title: "Nullam in lorem porttitor",
        content: "Mauris in nisl nisi. Phasellus nec mauris at lectus sollicitudin pretium. Aenean condimentum feugiat imperdiet. Suspendisse potenti. Nulla consectetur orci vel pharetra fermentum. Nulla ultrices rutrum porta. Etiam ac elit odio. Fusce semper pharetra risus, pharetra lobortis ante faucibus a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur nisl eleifend sodales fermentum. Etiam molestie auctor est, nec eleifend justo accumsan id. Pellentesque auctor, justo eget auctor consectetur, nisi arcu convallis ligula, at pharetra velit lectus quis nunc. Curabitur scelerisque vitae mi id pellentesque. Aliquam erat volutpat. Vivamus vel augue neque.",
        image: "http://placeimg.com/640/480/tech"
    },
    {
        title: "Etiam porttitor est at est tempor",
        content: "Proin gravida a quam at accumsan. Maecenas placerat efficitur nisi, sed volutpat risus accumsan ac. Vivamus sollicitudin ut enim sit amet volutpat. Donec eu blandit leo, et finibus nulla. Proin consectetur sit amet nibh vel tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi varius commodo nunc, sed facilisis lorem tristique sed. Quisque lacinia leo non faucibus varius. Quisque venenatis consectetur purus, vitae cursus ex bibendum eget. Nunc lectus eros, laoreet sit amet dapibus eget, dapibus id justo. Quisque nec tellus nibh.",
        image: "http://placeimg.com/640/480/people"
    },
    {
        title: "Integer dignissim nibh sit amet accumsan egestas",
        content: "Morbi vel mollis tellus. Sed eleifend ultrices sagittis. In vehicula lectus nec varius varius. Aenean vehicula felis at risus fringilla luctus. Nam at leo sit amet justo aliquet aliquam. Fusce id urna felis. Nam eu eleifend sem, pellentesque euismod enim. Cras vehicula ultricies libero, ac eleifend magna vestibulum eu. Curabitur rhoncus odio mauris, quis cursus tortor tincidunt in. Sed lacinia, arcu vel efficitur bibendum, tortor sapien ornare odio, fermentum lacinia ex mi vitae nisl. Phasellus commodo molestie elit a ultrices. Proin id cursus libero, eu euismod mi. Nam in purus sodales, ultrices diam a, porttitor orci. Nulla tristique neque a turpis sodales, a tincidunt est vestibulum. Nam condimentum lectus eget velit commodo, vitae ornare nunc facilisis.",
        image: "http://placeimg.com/640/480/animals"
    },
]

async function seed() {
    for (let index = 0; index < posts.length; index++) {
        const element = posts[index];
        db.query(`INSERT INTO ${postsTable} (title, content, image) VALUES('${element.title}', '${element.content}', '${element.image}');`, (error: any) => {
            if (error) throw error
            console.log(`inserted post #${index}`)
        })
    }
}

seed()
