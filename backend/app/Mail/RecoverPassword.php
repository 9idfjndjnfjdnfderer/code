<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class RecoverPassword extends Mailable
{
    use Queueable, SerializesModels;

    public $link_forgot;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($link_forgot)
    {
        $this->link_forgot = $link_forgot;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('email.forgot-password');
    }
}
