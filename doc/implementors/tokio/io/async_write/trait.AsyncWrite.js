(function() {var implementors = {};
implementors["hyper"] = [{"text":"impl <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"hyper/upgrade/struct.Upgraded.html\" title=\"struct hyper::upgrade::Upgraded\">Upgraded</a>","synthetic":false,"types":["hyper::upgrade::Upgraded"]},{"text":"impl <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"hyper/server/conn/struct.AddrStream.html\" title=\"struct hyper::server::conn::AddrStream\">AddrStream</a>","synthetic":false,"types":["hyper::server::tcp::addr_stream::AddrStream"]}];
implementors["postgres_native_tls"] = [{"text":"impl&lt;S&gt; <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"postgres_native_tls/struct.TlsStream.html\" title=\"struct postgres_native_tls::TlsStream\">TlsStream</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["postgres_native_tls::TlsStream"]}];
implementors["tokio"] = [];
implementors["tokio_io_timeout"] = [{"text":"impl&lt;R&gt; <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"tokio_io_timeout/struct.TimeoutReader.html\" title=\"struct tokio_io_timeout::TimeoutReader\">TimeoutReader</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a>,&nbsp;</span>","synthetic":false,"types":["tokio_io_timeout::TimeoutReader"]},{"text":"impl&lt;W&gt; <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"tokio_io_timeout/struct.TimeoutWriter.html\" title=\"struct tokio_io_timeout::TimeoutWriter\">TimeoutWriter</a>&lt;W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a>,&nbsp;</span>","synthetic":false,"types":["tokio_io_timeout::TimeoutWriter"]},{"text":"impl&lt;S&gt; <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"tokio_io_timeout/struct.TimeoutStream.html\" title=\"struct tokio_io_timeout::TimeoutStream\">TimeoutStream</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a>,&nbsp;</span>","synthetic":false,"types":["tokio_io_timeout::TimeoutStream"]}];
implementors["tokio_native_tls"] = [{"text":"impl&lt;S&gt; <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"tokio_native_tls/struct.TlsStream.html\" title=\"struct tokio_native_tls::TlsStream\">TlsStream</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["tokio_native_tls::TlsStream"]}];
implementors["tokio_postgres"] = [{"text":"impl <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"tokio_postgres/struct.Socket.html\" title=\"struct tokio_postgres::Socket\">Socket</a>","synthetic":false,"types":["tokio_postgres::socket::Socket"]},{"text":"impl <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> for <a class=\"enum\" href=\"tokio_postgres/tls/enum.NoTlsStream.html\" title=\"enum tokio_postgres::tls::NoTlsStream\">NoTlsStream</a>","synthetic":false,"types":["tokio_postgres::tls::NoTlsStream"]}];
implementors["tokio_rustls"] = [{"text":"impl&lt;IO&gt; <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"tokio_rustls/client/struct.TlsStream.html\" title=\"struct tokio_rustls::client::TlsStream\">TlsStream</a>&lt;IO&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;IO: <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["tokio_rustls::client::TlsStream"]},{"text":"impl&lt;IO&gt; <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"tokio_rustls/server/struct.TlsStream.html\" title=\"struct tokio_rustls::server::TlsStream\">TlsStream</a>&lt;IO&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;IO: <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["tokio_rustls::server::TlsStream"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> for <a class=\"enum\" href=\"tokio_rustls/enum.TlsStream.html\" title=\"enum tokio_rustls::TlsStream\">TlsStream</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["tokio_rustls::TlsStream"]}];
implementors["tokio_util"] = [{"text":"impl&lt;L, R&gt; <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> for <a class=\"enum\" href=\"tokio_util/either/enum.Either.html\" title=\"enum tokio_util::either::Either\">Either</a>&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a>,&nbsp;</span>","synthetic":false,"types":["tokio_util::either::Either"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()