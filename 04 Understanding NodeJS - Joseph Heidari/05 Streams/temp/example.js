Producer(your code)                         Writable internals                        Your subclass

[1] write(chunk, [enc], [cb])
 ─────────────────────────────────▶  (A) Validate / normalize args
    (B) If decodeStrings = true & chunk is string → to Buffer
        (C) Update internal length
            (D) If currently writing → enqueue chunk
                (E) Decide return value based on HWM
                    - if length <= highWaterMark → return true
                        - else → return false(signal backpressure)

 Queue state:
+------------------------------+
   | head →[chunk1][chunk2] ... |
    +------------------------------+

        When idle & a chunk is ready:
calls ─────────────▶   _write(chunk, encoding, done)
    (Your actual sink logic)
e.g., fs.write, db.insert, http request

do async / sync work...
                                                    on success: done()
                                                    on error: done(err)

 After done():
(F) Decrease internal length
    (G) If there are queued chunks → pull next and call _write again
        (H) If length just dropped below highWaterMark → emit 'drain'
            (I) If end() was requested and queue is empty → call _final(cb), then emit 'finish'

 Events surface back to you:
'drain'  → safe to resume producer if you saw write() return false
'finish' → all data flushed and _final() completed
'error'  → _write / _final / _destroy called back with error
