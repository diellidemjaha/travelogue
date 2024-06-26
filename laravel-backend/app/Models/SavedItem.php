<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SavedItem extends Model
{
    use HasFactory;
    protected $fillable = [
        'author_id',
        'user_id',
        'image_path',
        'collection_id',
    ];

    public function author()
    {
        return $this->belongsTo(User::class, 'author_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function savedItems()
    {
        return $this->hasMany(SavedItem::class, 'user_id');
    }
    public function post()
    {
        return $this->belongsTo(Post::class);
    }

    public function itinerary()
    {
        return $this->belongsTo(Itinerary::class);
    }

    public function photo()
    {
        return $this->belongsTo(Photo::class);
    }
    public function collection()
    {
        return $this->belongsTo(Collection::class);
    }
    
}
