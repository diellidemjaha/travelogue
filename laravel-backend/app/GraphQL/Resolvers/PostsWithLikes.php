<?php
// app/GraphQL/Resolvers/PostResolver.php

namespace App\GraphQL\Resolvers;

use App\Models\Post;

class PostsWithLikes
{
    public function find($root, array $args)
    {
        return Post::find($args['id']);
    }
}
