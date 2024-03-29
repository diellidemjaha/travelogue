<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Relations\HasOne;
use App\Models\Profile;
use App\Models\Collection;


class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];
    public function posts()
{
    return $this->hasMany(Post::class);
}

public function photos()
{
    return $this->hasMany(Photo::class);
}

public function itineraries()
{
    return $this->hasMany(Itinerary::class);
}
public function profile(): HasOne
{
    return $this->hasOne(Profile::class);
}
public function savedItems()
{
    return $this->hasMany(SavedItem::class);
}
public function collections()
{
    return $this->hasMany(Collection::class);
}
public function likes()
{
    return $this->hasMany(Like::class);
}
}
